#!/bin/bash

CAM=$1

if [ -f $CAM ]
	then 
		echo "Este e um arquivo comum!"
elif [ -d $CAM ]
	then 
		echo "Este e um diretorio!"
else
	echo "Este e outro tipo de arquivo!"
fi

ls -l $CAM
