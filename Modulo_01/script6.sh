#!/bin/bash

CAM=$1

if [ -d $CAM ]
	then 
		VAR=`ls -l $CAM | wc -l`
		echo "O $CAM tem $VAR arquivos!"
else
	echo "O argumento não é um diterório!"
fi