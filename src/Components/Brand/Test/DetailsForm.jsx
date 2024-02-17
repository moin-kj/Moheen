import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormStateContext } from './FormStateContextProvider';

function DetailsForm({ onNext }) {
  const { form, setForm } = useFormStateContext();
  const { register, handleSubmit, control, formState: { isDirty } } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: form.steps.details.value,
  });

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      steps: {
        ...prevForm.steps,
        details: {
          ...prevForm.steps.details,
          dirty: isDirty,
        },
      },
    }));
  }, [isDirty, setForm]);

  // Form submission logic

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}

export default DetailsForm;
