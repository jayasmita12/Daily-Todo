// import { db } from "../firebase/firebase";
// import { getDocs ,addDoc , collection,doc  , query , orderBy, getDoc} from "firebase/firestore";

// export const taskSchema = {
//     name: "",
//     startTime: "",
//     endTime:"",
//     status: "",
//     selected:false,
//     color:""
// }

// export const getAllTasks=async()=> {
//   try {
//     const appsData = await getDocs(
//       collection(db, "tasks")
//     );
//     const data = appsData?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     return data;
//   } catch (error) {
//     console.log(error)
//   }
// }


// export const addTask=async()=>{
//     try{
//         const docRef = await addDoc(collection(db, "tasks"), {
//             ...taskSchema,  
//         });
//        const data = await getDoc(doc(db , "tasks" , docRef.id))
//        return (data.data())
//     }
//     catch(error){
//         console.log(error)
//     }
// }
