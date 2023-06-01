// import React from "react";
// import { Tree, TreeNode } from "react-organizational-chart";
//
// export default class BasicTreeExample extends React.Component {
//   loadOrgHiearchy = employees => {
//     return employees.map(employee => {
//       return (
//         <TreeNode label={<div>{employee}</div>}>
//           {(employee === "Employee 2" && (
//             <TreeNode label={<div>Employee Child</div>} />
//           )) ||
//             null}
//         </TreeNode>
//       );
//     });
//   };
//
//   render() {
//     const employees = ["Employee 1", "Employee 2", "Employee 3"];
//     return (
//       <Tree lineWidth={"2px"} label={<div>Root</div>}>
//         {this.loadOrgHiearchy(employees)}
//       </Tree>
//     );
//   }
// }

