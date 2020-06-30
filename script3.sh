#!/bin/bash

PATH="/home/luciano/unix_tests/script1.sh"

if [ -e $PATH ]
	then
		echo "O caminho $PATH esta habilitado!"
	if [ -w $PATH ]
		then
			echo "Voce tem permissao para editar $PATH"
		else 
			echo "Voce NAO foi autorizado a editar $PATH"
	fi	
else "O caminho nao existe!"
fi
