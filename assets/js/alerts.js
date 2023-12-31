import { Toast } from 'toastify-react-native';

const showToastsInputList = () => {
    Toast.error('Ingresa un valor 💔', 'center');
}
const showToastsTaskOk = () => {
    Toast.success('Tarea Terminada', 'center');
}

const showToastsTaskModified = () => {
    Toast.info('Tarea modificada', 'center');
}

const showToastsTaskDeleted = () => {
    Toast.success('Tarea eliminada', 'center');
}



export { showToastsInputList, showToastsTaskOk, showToastsTaskModified, showToastsTaskDeleted }