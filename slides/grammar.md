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


note:
    <p>A grammar describes the complete space of
    programs that we can generate.</p>

    <p>Imperative vs functional</p>
