// import React from "react";
// import styled from "@emotion/styled";
// import { Tree, TreeNode } from "react-organizational-chart";
// import { useSelector } from "react-redux";
// const StyledNode = styled.div`
//   padding: 5px;
//   border-radius: 8px;
//   display: inline-block;
//   border: 1px solid red;
// `;
//
// const StyledTreeExample = ({ data }) => {
//   // const {employeeData: data}=useSelector(state=>state.employeeData)
//   console.log('StyledTreeExample: ', data)
//   return (
//     <Tree
//       lineWidth={"2px"}
//       lineColor={"green"}
//       lineBorderRadius={"10px"}
//       label={<div>{data?.name || data?.[0]?.name || 'root'}</div>}
//     >
//       {/* const tree = data.map((node, key) => {
//     if(node.data === null) {
//       return <div className="Tree" style={{marginLeft: String((level + 1) * margin) + "px"}} key={key}>{node.name}</div>
//     }
//     return <Tree key={key} name={node.name} data={node.data} level={level+1} />
// }) */}
//       {data?.map((item) => {
//         if (item?.children?.length) {
//           return <StyledTreeExample data={item.children} />;
//         } else {
//           return (
//             <TreeNode label={<div>{item?.name}</div>}></TreeNode>
//           );
//         }
//       })}
//       {/* <TreeNode label={<StyledNode>Child 1</StyledNode>}>
//       <TreeNode label={<StyledNode>Grand Child</StyledNode>} />
//     </TreeNode>
//     <TreeNode label={<StyledNode>Child 2</StyledNode>}>
//       <TreeNode label={<StyledNode>Grand Child</StyledNode>}>
//         <TreeNode label={<StyledNode>Great Grand Child 1</StyledNode>} />
//         <TreeNode label={<StyledNode>Great Grand Child 2</StyledNode>} />
//       </TreeNode>
//     </TreeNode>
//     <TreeNode label={<StyledNode>Child 3</StyledNode>}>
//       <TreeNode label={<StyledNode>Grand Child 1</StyledNode>} />
//       <TreeNode label={<StyledNode>Grand Child 2</StyledNode>} />
//     </TreeNode> */}
//     </Tree>
//   );
// };
//
// export default StyledTreeExample;
