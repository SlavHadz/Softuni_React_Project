import {useState} from 'react';

export default function useForm(
    initialValues,
    submitHandler
) {
    const [formValues, setFormValues] = useState(initialValues);

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(formValues);
    }

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return {
        formValues,
        onSubmit,
        onChange
    }
}