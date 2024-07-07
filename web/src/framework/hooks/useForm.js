// src/hooks/useForm.js
import { useState } from "react";
import { useMutation } from "react-query";

export const useForm = (initialState, mutationFn, onSuccess) => {
    const [formState, setFormState] = useState(initialState);

    const mutation = useMutation(mutationFn, {
        onSuccess: (data) => {
            if (onSuccess) {
                onSuccess(data);
            }
        },
        onError: (data) => {
            console.log(data)
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate(formState);
    };

    return {
        formState,
        handleChange,
        handleSubmit,
    };
};
