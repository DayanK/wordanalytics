
interface IWarning  {
    warningMessage: string
}

export const Warning : React.FC<IWarning> = ({ warningMessage }) => {
  return (
    <p className="warning">{ warningMessage }!</p>
  )
}
