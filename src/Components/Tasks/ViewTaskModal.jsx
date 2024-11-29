import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTaskByIndividualId} from "../ApiFunctions";
import IndividualTask from "./IndividualTask";

const OpenModalFunction = (props) => {

    const [individualTask, setIndividualTask] = useState([]);
  
    const {id} = props

    const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const getTaskById = async()=>{

        const task = await axios.get(getTaskByIndividualId+`${id}`);
        setIndividualTask(task.data.results.individualTask);


      }
      useEffect(()=>{
        getTaskById();
      },[])
    const [isModalOpen,setIsModalOpen] = useState(false)

    return (
        <div>
        <Link className="text-base font-semibold text-blue-500" onClick={setIsModalOpen}> View </Link>
        <Modal title="Task Information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        width={1000} className="top-10 left-20">
       <div className="">
      <IndividualTask task={individualTask}/>
       </div>
      </Modal>
        </div>
    );

}
export default OpenModalFunction;
