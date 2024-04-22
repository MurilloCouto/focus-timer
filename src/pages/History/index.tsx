import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { HistoryContainer, HistoryList, Status } from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

export function History() {
  const { cycles } = useContext(CyclesContext)

  const getStatus = (cycle: Cycle) => {
    if (cycle.finishedDate) {
      return <Status statusColor="green">Concluído</Status>
    } else if (!cycle.stopDate && !cycle.finishedDate) {
      return <Status statusColor="yellow">Em andamento</Status>
    } else if (cycle.stopDate) {
      return <Status statusColor="red">Interrompido</Status>
    }
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>{getStatus(cycle)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
