import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      {activeCycle ? (
        <h1>Tempo restante :</h1>
      ) : (
        <>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="dê um nome para a sua tarefa"
            {...register('task')}
          />
          <label htmlFor="minutesAmount">durante</label>
        </>
      )}

      <datalist id="task-suggestions">
        <option value="Tarefa 1" />
        <option value="Tarefa 2" />
        <option value="Tarefa 3" />
        <option value="Tarefa X" />
      </datalist>

      {activeCycle ? (
        <></>
      ) : (
        <>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </>
      )}
    </FormContainer>
  )
}
