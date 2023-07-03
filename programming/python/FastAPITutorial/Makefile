create-env:
	conda create -n env -f requirements.txt --yes
activate-env:
	conda activate env
deactivate-env:
	conda deactivate
run-basic-server:
	(cd basic_server && uvicorn basic.server:app --reload)
run-advanced-server:
	(cd advanced_server && uvicorn advanced_server.server:app --reload)