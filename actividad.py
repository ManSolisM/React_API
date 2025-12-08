

#debe entregar la menor cantidad de billetes posible
#control de cantidad de billetes disponibles por denominacion
#denominaciones: 50,100,200,500, 1000
#si no se puede generar la cantidad correcta de dinero con los billetes disponibles no entregara nada
#10 billetes de cada tipo

billete_20 = 10
billete_50 = 10
billete_100 = 10
billete_200 = 10
billete_500 = 10
billete_1000 = 10
print("Dispensador de billetes....")
print("Ingrese una cantidad para disponer")
cantidad = input("Cantidad: ")
cantidad = int(cantidad)
entregado = 0
totalEntrega = ""

if cantidad <= 18700:
    while True:
        if cantidad <= 0:
            print("Cant")
            print(totalEntrega)
            break        
        elif cantidad >= 1000 and billete_1000 > 0:
            entregado = cantidad - 1000
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $1000"
                break
            else:
                billete_1000 = billete_1000 -1
                totalEntrega = totalEntrega + "\nBillete: $1000"
                cantidad = entregado                     
        elif cantidad >= 500 and billete_500 > 0:
            entregado = cantidad - 500
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $500"
                break
            else:
                billete_500 = billete_500 -1
                totalEntrega = totalEntrega + "\nBillete: $500"
                cantidad = entregado  
        elif cantidad >= 200 and billete_200 > 0:
            entregado = cantidad - 200
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $200"
                break
            else:
                billete_200 = billete_200 -1
                totalEntrega = totalEntrega + "\nBillete: $200"
                cantidad = entregado  
        elif cantidad >= 100 and billete_100 > 0:
            entregado = cantidad - 100
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $100"
                break
            else:
                if billete_100 > 0 and billete_100 < 11:
                    billete_100 = billete_100 -1
                    totalEntrega = totalEntrega + "\nBillete: $100"
                    cantidad = entregado
        elif cantidad >= 50 and billete_50 > 0:
            entregado = cantidad - 50
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $50"
                break
            else:
                billete_50 = billete_50 -1
                totalEntrega = totalEntrega + "\nBillete: $50"
                cantidad = entregado  
        elif cantidad >= 20 and billete_20 > 0:
            entregado = cantidad - 20
            if entregado == 0:
                totalEntrega = totalEntrega + "\nBillete: $20"
                break
            else:
                billete_20 = billete_20 -1
                totalEntrega = totalEntrega + "\nBillete: $20"
                cantidad = entregado 
else:
    print("Cantidad no disponible")