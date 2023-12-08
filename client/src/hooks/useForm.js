import {useState} from 'react';

export default function useForm(
    initialValues,
    submitHandler
) {
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitHandler(formValues);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    }

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    return {
        formValues,
        error,
        setFormValues,
        onSubmit,
        onChange
    }
}