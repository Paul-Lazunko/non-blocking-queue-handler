# Changelog
All notable changes to this package will be documented in this file.

## v1.1.2

**CHANGED**

-node-chain-event-emitter switched to v2.1.1 (ability to change handlers context);

**ADDED**

- options **ctx** property;


## v1.1.1

**CHANGED**

-node-chain-event-emitter switched to v2.1.0 (ability to change data while it is handling);

## v1.1.0

**CHANGED**

- Replaced **handler** property with **handlers** property which is array of functions all of which take two arguments - data and next;

**ADDED**

- default event name ('tick') and default interval (1 second);
