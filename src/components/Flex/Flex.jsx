import "./flex.css"

function Flex(props) {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default Flex
