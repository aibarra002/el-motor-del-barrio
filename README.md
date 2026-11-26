# Proyecto de la célula Odin

## Integrantes

- Carolina Ibarra
- Paola Garcia
- Felipe Rojas
- Alejandro Manyoma

## El negocio

El proyecto busca **organizar información de un parqueadero** para **hacer mas facil la organización de sus datos**.

## Cómo ejecutar el motor

Desde la carpeta raíz del proyecto, abre una terminal y ejecuta:

```bash
node motor.js
```
## Complejidad Big O – Niveles 2 y 3

| Nivel | Función | Big O | Justificación |
|---|---|---|---|
| 2 | `totalGeneral()` | O(n) | Recorre todos los registros para sumar los valores. |
| 2 | `promedio()` | O(n) | Primero suma todos los valores y después calcula el promedio. |
| 2 | `registroMayor()` | O(n) | Va revisando los registros hasta encontrar el de mayor valor. |
| 2 | `filtrarPorCategoria()` | O(n) | Revisa uno por uno para encontrar los vehículos de esa categoría. |
| 2 | `totalesPorCategoria()` | O(n) | Recorre los registros y va contando cada tipo de vehículo. |
| 3 | `personasUnicas()` | O(n) | Usa un Set para guardar los nombres sin repetirlos. |
| 3 | `recurrentesLento()` | O(n²) | Compara cada placa con las demás usando dos ciclos. |
| 3 | `recurrentesRapido()` | O(n) | Usa dos Set para identificar las placas repetidas en un solo recorrido. |
| 3 | `categoriaEstrella()` | O(n) | Revisa las categorías para encontrar la que más se repite. |
| 3 | `parQueSuma()` | O(n) | Usa un Map para buscar el complemento sin comparar todos los registros. |

**Nota:** La mayoría de las funciones recorren los datos una sola vez, por eso son O(n). La función `recurrentesLento()` es O(n²) porque tiene dos ciclos que hacen comparaciones entre los registros.


## Contador de pasos – Registros repetidos

| Función | Pasos realizados | Explicación |
|---|---:|---|
| `recurrentesLento()` | 300 | Compara las placas entre sí utilizando dos ciclos. |
| `recurrentesRapido()` | 25 | Revisa cada registro una sola vez y utiliza Set para identificar los repetidos. |

**Conclusión:** Las dos funciones encontraron las mismas 7 placas repetidas, pero la versión rápida hizo menos operaciones. Esto demuestra que usar Set ayuda a ahorrar trabajo y hace que el proceso sea más eficiente.