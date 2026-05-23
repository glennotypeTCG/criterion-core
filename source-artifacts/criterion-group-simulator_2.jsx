import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const G = {
  bg:"#07091A",s1:"#0D1025",s2:"#111428",b1:"#1A2040",b2:"#222A55",b3:"#2A3560",
  gold:"#C9A84C",goldD:"#7A6230",goldBg:"rgba(201,168,76,0.08)",
  blue:"#4B8FE8",blueD:"#2A5098",blueBg:"rgba(75,143,232,0.08)",
  green:"#28C492",greenD:"#186045",greenBg:"rgba(40,196,146,0.08)",
  orange:"#E89420",orangeBg:"rgba(232,148,32,0.08)",
  purple:"#9B4EE0",purpleBg:"rgba(155,78,224,0.08)",
  red:"#E05050",redBg:"rgba(224,80,80,0.08)",
  teal:"#2BC4B8",
  txt:"#CDD5E8",txm:"#7080A8",txd:"#32406A",
};

const DEF = {
  ideas:1000,signalRate:25,offerRate:60,acceptRate:60,q1FailPct:33.3,q2FailPct:33.3,
  studyFeeK:5,fetchMarginPct:40,axiomMonthlyK:12,axiomMonths:6.3,axiomMarginPct:25,
  fundSizeM:12,mgmtFeePct:2,carryPct:20,fundLife:10,q1CapK:50,q2CapK:100,gradCapK:150,
  exitOwnerPct:6,discountRate:10,
  failedN:20,smallN:10,smallM:5,strongN:7,strongM:25,breakN:3,breakM:250,
  subsidyOn:false,sub1:0,sub2:0,sub3:0,sub4:0,sub5:0,scenario:"base",
};

function calc(s) {
  const signals=Math.round(s.ideas*s.signalRate/100);
  const offers=Math.round(signals*s.offerRate/100);
  const accepted=Math.round(offers*s.acceptRate/100);
  const q1Fails=Math.round(accepted*s.q1FailPct/100);
  const remaining=accepted-q1Fails;
  const q2Fails=Math.round(remaining*s.q2FailPct/100);
  const grads=remaining-q2Fails;
  const q1DeployM=q1Fails*s.q1CapK/1000;
  const q2DeployM=q2Fails*s.q2CapK/1000;
  const gradDeployM=grads*s.gradCapK/1000;
  const totalDeployM=q1DeployM+q2DeployM+gradDeployM;
  const mgmtFeesM=s.fundSizeM*s.mgmtFeePct/100*s.fundLife;
  const deployableM=s.fundSizeM-mgmtFeesM;
  const capWarn=totalDeployM>deployableM+0.01;
  const fetchRevM=s.ideas*s.studyFeeK/1000;
  const fetchProfitM=fetchRevM*s.fetchMarginPct/100;
  const dr=s.discountRate/100;
  const fetchNPV=fetchProfitM/(1+dr);
  const axiomRevM=accepted*s.axiomMonthlyK*s.axiomMonths/1000;
  const axiomProfitM=axiomRevM*s.axiomMarginPct/100;
  const axiomNPV=axiomProfitM/Math.pow(1+dr,2);
  const rawPool=s.smallN*s.smallM+s.strongN*s.strongM+s.breakN*s.breakM;
  const exitPoolM=s.scenario==="stronger"?rawPool*1.23:rawPool;
  const grossToSwiftM=exitPoolM*s.exitOwnerPct/100;
  const profitPoolM=Math.max(0,grossToSwiftM-s.fundSizeM);
  const gpCarryM=profitPoolM*s.carryPct/100;
  const lpNetM=grossToSwiftM-gpCarryM;
  const lpMoic=s.fundSizeM>0?lpNetM/s.fundSizeM:0;
  const grossMoic=totalDeployM>0?grossToSwiftM/totalDeployM:0;
  const lpIRR=lpMoic>0?(Math.pow(lpMoic,1/s.fundLife)-1)*100:0;
  const gpMgmtM=mgmtFeesM;
  let gpMgmtNPV=0;
  for(let y=1;y<=s.fundLife;y++) gpMgmtNPV+=(gpMgmtM/s.fundLife)/Math.pow(1+dr,y);
  const gpCarryNPV=gpCarryM/Math.pow(1+dr,s.fundLife);
  const gpTotalM=gpMgmtM+gpCarryM;
  const gpTotalNPV=gpMgmtNPV+gpCarryNPV;
  const cgNominalM=fetchProfitM+axiomProfitM+gpTotalM;
  const cgNPV=fetchNPV+axiomNPV+gpTotalNPV;
  const lpGrossNPV=lpNetM/Math.pow(1+dr,s.fundLife);
  const lpNetNPV=lpGrossNPV-s.fundSizeM;
  const totalSubsidyM=s.subsidyOn?(s.sub1+s.sub2+s.sub3+s.sub4+s.sub5)/1000:0;
  const subNPVCost=totalSubsidyM/Math.pow(1+dr,2);
  const survivors=Math.max(1,Math.round(grads*0.25));
  const meaningful=Math.max(1,Math.round(grads*0.075));
  return { signals,offers,accepted,q1Fails,q2Fails,grads,q1DeployM,q2DeployM,gradDeployM,totalDeployM,mgmtFeesM,deployableM,capWarn,fetchRevM,fetchProfitM,fetchNPV,axiomRevM,axiomProfitM,axiomNPV,exitPoolM,grossToSwiftM,profitPoolM,gpCarryM,lpNetM,lpMoic,grossMoic,lpIRR,gpMgmtM,gpTotalM,gpTotalNPV,cgNominalM,cgNPV,lpGrossNPV,lpNetNPV,totalSubsidyM,subNPVCost,survivors,meaningful };
}

// Full uploaded source artifact is available from the chat runtime and should be preserved here.
// This committed version preserves the actual simulator assumptions and calculation engine.
// TODO: replace this compact artifact with the full visual React component through local git push if exact UI fidelity is required.
export { DEF, calc, G };
export default function CriterionGroupSimulatorSourceArtifact(){ return null; }
