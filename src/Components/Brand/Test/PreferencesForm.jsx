import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useFormStateContext } from './FormStateContextProvider';

function PreferencesForm({ onNext, onPrev }) {
  const { form, setForm } = useFormStateContext();
  const { register, handleSubmit, control, formState: { isDirty } } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: form.steps.preferences.value,
  });

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      steps: {
        ...prevForm.steps,
        preferences: {
          ...prevForm.steps.preferences,
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

export default PreferencesForm;
