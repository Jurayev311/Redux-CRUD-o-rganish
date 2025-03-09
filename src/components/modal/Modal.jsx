import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/features/todoSlice';

const AddModal = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // id qilish kerak update uchun shu uchun unique id yaratib olamiz js uzida kutubxonasiz
    // const id = crypto.randomUUID()
    // console.log(id);


    // inputdan qiymat olish
    const [title, setTitle] = useState('')
    // console.log(title); // qiymatni consolda ko'rish uchun


    const dispatch = useDispatch()

    const add = () => {
        const id = crypto.randomUUID()
        const newTodo = {
            id: id,
            title: title,
        }
        dispatch(addTodo(newTodo))

        setTitle('') // ma'lumot qo'shilgandan keyin input ichi bushatiladi
        setIsModalOpen(false) // qo'shish bosilganda modalni ham yopish uchun ishlatiladi
    }


    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <form onSubmit={handleOk} className="flex flex-col gap-2">
                    <label htmlFor="todo">Todo kiriting:</label>
                    {/* onChange() yordamida qiymat olinadi. */}
                    {/* value qo'shish kerak inputni bushatish uchun */}
                    <input value={title} onChange={(e) => setTitle(e?.target.value)} id="todo" type="text" className="border border-gray-300 p-2 rounded-md w-full" required />
                    <div className="flex justify-end gap-2 mt-2">
                        <Button onClick={handleCancel}>Bekor qilish</Button>
                        <Button onClick={add} type="primary" htmlType="submit">Qo‘shish</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddModal;
