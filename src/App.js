import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'
function App(){
    let[hasDot,setHasDot]=useState(false)
    let[result,setResult]=useState('')
    const eventhandler=(e)=>{
        let input=e.target.innerText;
        if(input=='÷') { input='/'}
        if(input=='×') { input='*'}
        if(input=='.' ) {
            if(hasDot==true) return
            else{
                setHasDot(true)
            }
        }
        if(input=='+' || input=='-' || input=='*' ||input=='/'){
            setHasDot(false)
        }
        
        setResult(result+input)
    }
    const clearBtn=()=>{
        setResult('')
        setHasDot(false)
    }
    const backSpaceBtn=()=>{
        if(result.endsWith('.'))
            setHasDot(false)
        setResult(result.slice(0,-1))
    }
    const equalBtn=()=>{
        setResult(String(evaluate(result)))
        setHasDot(false)
    }
    return(
        <div className="calculator">
            <div className="screen">{result}</div>
            <table>
                <tbody>
                    <tr>
                        <td colSpan={2} className='color' onClick={clearBtn}>clear</td>
                        <td className='color' onClick={backSpaceBtn}>c</td>
                        <td className='color' onClick={eventhandler}>÷</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td onClick={eventhandler}>7</td>
                        <td onClick={eventhandler}>8</td>
                        <td onClick={eventhandler}>9</td>
                        <td onClick={eventhandler} className='color'>×</td>
                    </tr>
                </tbody>
                <tbody>
                   <tr>
                        <td onClick={eventhandler}>4</td>
                        <td onClick={eventhandler}>5</td>
                        <td onClick={eventhandler}>6</td>
                        <td className='color' onClick={eventhandler}>-</td>
                   </tr>
                </tbody>
                <tbody>
                   <tr>
                        <td onClick={eventhandler}>1</td>
                        <td onClick={eventhandler}>2</td>
                        <td onClick={eventhandler}>3</td>
                        <td className='color' onClick={eventhandler}>+</td>
                   </tr>
                </tbody>
                <tbody>
                   <tr>
                        <td onClick={eventhandler}>0</td>
                        <td onClick={eventhandler}>.</td>
                        <td colSpan={2} className='color' onClick={equalBtn}>=</td>
                   </tr>
                </tbody>
            </table>
        </div>

    )
}
export default App