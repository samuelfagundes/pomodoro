import { Play } from 'phosphor-react'
import {
  CountdownContaier,
  FormContaier,
  HomeContaier,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContaier>
      <form action="">
        <FormContaier>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Task 1" />
            <option value="Task 2" />
            <option value="Task 3" />
            <option value="Task 4" />
            <option value="Task 5" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContaier>

        <CountdownContaier>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContaier>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContaier>
  )
}
