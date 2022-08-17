import React from "react";
import "../components/styles.css"

export function Table(){
    return(

<div>
 
<table>
    
<thead>
  <tr className="name row1">
    <th></th>
    <th colSpan={2} >Consumo Fora de Ponta</th>
    <th colSpan={2}>Consumo Ponta</th>
    <th colSpan={2}>Consumo Reservado</th>
    <th colSpan={2}>Consumo Total</th>
  </tr>
</thead>
<tbody>
  <tr className="name">
    <td></td>
    <td>Valor</td>
    <td>Horário</td>
    <td>Valor</td>
    <td>Horário</td>
    <td>Valor</td>
    <td>Horário</td>
    <td>Valor</td>
    <td>Horário</td>
  </tr>



  <tr className="name2 row1">
    <td>Máximo</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>


  <tr className="name2">
    <td>Médio</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>

  <tr className="row1 name2">
    <td>Mínimo</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>


  <tr className="name2">
    <td>Total</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>

<div className="name">
Dados de Consumo
</div>

    
    </div>
    )
}




