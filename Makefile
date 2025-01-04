compose = @docker compose -f ./local-dev/compose.yaml

.PHONY: local.up.build

local.up.build:
	${compose} up --build -d
