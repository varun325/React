import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  
  const {isLoading, error,sendRequest: sendTaskRequest}=useHttp();

  const loadData = (taskText,data)=>{
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({url:'https://http-post-demo-1a35c-default-rtdb.firebaseio.com/tasks.json',
    method : 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: {text: taskText}
  },loadData.bind(null,taskText));
  }

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
