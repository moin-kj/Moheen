import React, { useCallback } from 'react';
import { Tab } from '@headlessui/react';
import { FormStateContextProvider, useFormStateContext } from './FormStateContextProvider';
import StepperItem from './StepperItem';
import DetailsForm from './DetailsForm';
import PreferencesForm from './PreferencesForm';

const FORM_STEPS = [
    { label: 'Details' },
    { label: 'Preferences' },
    { label: 'Complete' },
];

function CreateTaskMultiStepForm() {
    const { form, setForm } = useFormStateContext();

    const next = useCallback(() => {
        setForm((prevForm) => ({
            ...prevForm,
            selectedIndex: prevForm.selectedIndex + 1,
        }));
    }, [setForm]);

    const prev = useCallback(() => {
        setForm((prevForm) => ({
            ...prevForm,
            selectedIndex: prevForm.selectedIndex - 1,
        }));
    }, [setForm]);

    const setSelectedIndex = useCallback((index) => {
        setForm((prevForm) => ({
            ...prevForm,
            selectedIndex: index,
        }));
    }, [setForm]);

    return (
        <Tab.Group selectedIndex={form.selectedIndex}>
            <Tab.List className={'Stepper mb-6'}>
                {FORM_STEPS.map((step, index) => {
                    const canSelectStep = Object.values(form.steps)
                        .slice(0, index)
                        .every((step) => step.valid && !step.dirty);

                    return (
                        <StepperItem
                            key={index}
                            className={classNames({
                                ['CompletedStep']: index < selectedIndex,
                                ['StepperStepActionable']: canSelectStep,
                            })}
                            step={index + 1}
                            onSelect={() => {
                                if (canSelectStep) {
                                    setSelectedIndex(index);
                                }
                            }}
                        >
                            {step.label}
                        </StepperItem>
                    );
                })}
            </Tab.List>

            <Tab.Panels>
                <Tab.Panel>
                    <div className={'flex w-full flex-col space-y-6'}>
                        <div>
                            <Heading type={3}>Details</Heading>
                        </div>

                        <DetailsForm onNext={next} />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className={'flex w-full flex-col space-y-6'}>
                        <div>
                            <Heading type={3}>Preferences</Heading>
                        </div>

                        <PreferencesForm onNext={next} onPrev={prev} />
                    </div>
                </Tab.Panel>

                <Tab.Panel>
                    <div className={'flex w-full flex-col space-y-6'}>
                        <div>
                            <Heading type={3}>Complete</Heading>
                        </div>

                        <pre>{JSON.stringify(form, null, 2)}</pre>

                        <div className={'flex space-x-2'}>
                            <Button>Proceed to your Dashboard</Button>
                            <Button color={'transparent'} onClick={prev}>
                                Back
                            </Button>
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>

    );
}

function CreateTaskMultiStepFormContainer() {
    return (
        <FormStateContextProvider>
            <CreateTaskMultiStepForm />
        </FormStateContextProvider>
    );
}

export default CreateTaskMultiStepFormContainer;
