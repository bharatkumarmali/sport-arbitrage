// import { Table } from "react-bootstrap";

// const OddScreenTable = () => {
//     const cellStyle: React.CSSProperties = {
//         border: "none",
//         padding: "0",
//         textAlign: "center",
//         background: "var(--bg-transparent)",
//         verticalAlign: "middle",
//         minWidth: "70px",
//     };

//     const iconSources: string[] = [
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//         "/images/table/heading/10.png",
//     ];

//     return (
//         <div
//             style={{
//                 background: "var(--bg-background-deep-blue)",
//                 paddingTop: "24px",
//                 paddingBottom: "24px",
//                 borderRadius: "32px",
//             }}
//         >
//             <div
//                 style={{
//                     height: "fit-content",
//                     overflowY: "scroll",
//                     scrollbarWidth: "none",
//                     msOverflowStyle: "none",
//                 }}
//             >

//                 <div
//                     style={{
//                         overflowX: "auto",
//                         display: "block",
//                     }}
//                 >
//                     {/* Table Wrapper */}
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: "8px",
//                         }}
//                     >
//                         {/* Header Row */}
//                         <div
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 background: "var(--bg-transparent)",
//                                 fontSize: "14px",
//                                 fontWeight: "bold",
//                                 maxWidth: "120px",
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: 0,
//                                     zIndex: 2,
//                                     textAlign: "center",
//                                     maxWidth: "120px",
//                                     backgroundColor: "#1C212B"
//                                 }}
//                             >
//                                 {/* Header Cell 1 */}
//                             </div>
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: 0,
//                                     zIndex: 1,
//                                     textAlign: "center",
//                                     padding: 0,
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     gap: "12px",
//                                     alignItems: "center",
//                                     maxWidth: "120px",
//                                 }}
//                             >
//                                 {/* Header Cell 2 */}
//                             </div>
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: "240px",
//                                     zIndex: 1,
//                                     textAlign: "center",
//                                     padding: "18px 0px",
//                                     borderRadius: "6px",
//                                     maxWidth: "120px"
//                                 }}
//                             >
//                                 BEST
//                             </div>
//                             <div
//                                 style={{
//                                     flex: "0 0 80px",
//                                     textAlign: "center",
//                                     paddingTop: "20px",
//                                     paddingBottom: "20px",
//                                     fontWeight: 400,
//                                     maxWidth: "120px",
                                    
//                                 }}
//                             >
//                                 AVERAGE
//                             </div>
//                             {/* Icon Cells */}
//                             {iconSources.map((src, index) => (
//                                 <div
//                                     key={index}
//                                     style={{
//                                         flex: "0 0 auto",
//                                         textAlign: "center",
//                                         width: "120px"
//                                     }}
//                                 >
//                                     <img
//                                         alt={`table icon ${index + 1}`}
//                                         src={src}
//                                         style={{
//                                             width: "20px",
//                                             height: "20px",
//                                             objectFit: "cover",
//                                             margin: "0 auto"
//                                         }}
//                                     />
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Data Row */}
//                         <div
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 background: "var(--bg-row-background)",
//                                 fontSize: "12px",
//                             }}
//                         >
//                             {/* Sticky Cell 1 */}
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: 0,
//                                     zIndex: 1,
//                                     textAlign: "center",
//                                     padding: 0,
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     gap: "12px",
//                                     alignItems: "center",
//                                     maxWidth: "120px"
//                                 }}
//                             >
//                                 <span style={{
//                                     fontWeight: "500",
//                                 }}>Chargers</span>

//                                 <span style={{
//                                     fontWeight: "500",
//                                 }}>Chargers</span>
//                             </div>
//                             {/* Sticky Cell 2 */}
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: "120px",
//                                     zIndex: 1,
//                                     textAlign: "center",
//                                     padding: "18px 0px",
//                                     borderRadius: "6px",
//                                     maxWidth: "120px"
//                                 }}
//                             >
//                                 <span style={{ fontWeight: "300" }}>12/12/2024</span>
//                                 <br />
//                                 <span style={{ fontWeight: "500" }}>11:30 pm</span>
//                                 <br />
//                                 <span style={{ fontWeight: "500" }}>in 1 day</span>
//                             </div>
//                             {/* Sticky Cell 3 */}
//                             <div
//                                 style={{
//                                     flex: "0 0 150px",
//                                     position: "sticky",
//                                     left: "240px",
//                                     zIndex: 1,
//                                     textAlign: "center",
//                                     maxWidth: "120px",
//                                 }}
//                             >
//                                 <div style={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                 }}>
//                                     <img
//                                         alt="hello"
//                                         src="/images/table/heading/10.png"
//                                         style={{
//                                             width: "20px",
//                                             height: "20px",
//                                             objectFit: "cover",
//                                             margin: "0 auto",
//                                         }}
//                                     />
//                                     <span>-202</span>
//                                 </div>
//                                 <div style={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     marginTop: "17px"
//                                 }}>
//                                     <img
//                                         alt="hello"
//                                         src="/images/table/heading/10.png"
//                                         style={{
//                                             width: "20px",
//                                             height: "20px",
//                                             objectFit: "cover",
//                                             margin: "0 auto",
//                                         }}
//                                     />
//                                     <span>-202</span>
//                                 </div>

//                             </div>
//                             {/* Remaining Non-Sticky Cells */}
//                             {[...Array(9)].map((_, index) => (
//                                 <div
//                                     key={index}
//                                     style={{
//                                         flex: "0 0 auto",
//                                         textAlign: "center",
//                                         display: "flex",
//                                         flexDirection: "column",
//                                         gap: "16px",
//                                         justifyContent: "center",
//                                         alignItems: "center",
//                                         width: "120px"
//                                     }}
//                                 >
//                                     <span style={{ fontWeight: 500, fontSize: "12px" }}>-210</span>
//                                     <span style={{ fontWeight: 500, fontSize: "12px" }}>-240</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };
// export default OddScreenTable;
