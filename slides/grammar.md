## Grammar

```rust
PROGRAM := COMMAND
         | if CONDITION then COMMAND else COMMAND

COMMAND := thrust | skip | left | right

CONDITION := EXPRESSION < EXPRESSION
           | EXPRESSION > EXPRESSION
           | ...

EXPRESSION := SENSOR
            | NUMBER
            | EXPRESSION + EXPRESSION
            | ...

SENSOR := x | y | vx | vy | o | fuel | ...
```
