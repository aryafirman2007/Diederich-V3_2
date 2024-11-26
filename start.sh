#!/bin/bash

while true; do
    # Jalankan server Node.js Anda
    node index.js

    # Tunggu beberapa detik sebelum restart (opsional)
    echo "Server crashed. Restarting in 1 seconds..."
    sleep 1
done
