from abc import ABC, abstractmethod

class Burguer:
    def __init__(self):
        self.bread = None
        self.meat = None
        self.cheese = None
        self.meat = None
        self.vegetables = None
        self.sauce = None
        
    def __str__(self):
        return f"""    Seu pedido é
        Pão: {self.bread}
        Carne: {self.meat}
        Queijo: {self.cheese}
        Vegetais: {self.vegetables}
        Molho: {self.sauce}
        """

class BurguerBuilder:
    def __init__(self):
        self.burguer = Burguer()
    
    def build_bread(self):
        opcaoBread = input("""Escolha opção de pão
            1-Parmesão
            2-9 Grãos
            3-Italiano
        """)
        if opcaoBread == '1':
            self.burguer.bread = "Parmesão"
        elif opcaoBread == '2':
            self.burguer.bread = "9 Grãos"
        elif opcaoBread == '3':
            self.burguer.bread = "Italiano"
        else: 
            print("Erro: Opção Invalida")
        
    def build_meat(self):
        opcaoMeat = input("""Escolha opção de Carne
            1-Carne
            2-Frango
            3-Linguiça
            4-Linguiça
        """)
        if opcaoMeat == '1':
            self.burguer.meat = "Carne"
        elif opcaoMeat == '2':
            self.burguer.meat= "Frango"
        elif opcaoMeat == '3':
            self.burguer.meat = "Linguiça "
        elif opcaoMeat == '4':
            self.burguer.meat = "Vegetariano"
        else: 
            print("Opção Invalida")
        
    def build_cheese(self):
        opcaoCheese = input("""Escolha opção de Carne
            1-Cheddar
            2-Suíço
            3-Muçarela
        """)
        if opcaoCheese == '1':
            self.burguer.cheese = "Cheddar"
        elif opcaoCheese == '2':
            self.burguer.cheese = "Suíço"
        elif opcaoCheese == '3':
            self.burguer.cheese = "Muçarela"
        else: 
            print("Opção Invalida")
        
    def build_vegetables(self):
        opcaoVegetables = input("""Escolha opção de Carne
            1-Azeitona
            2-Alface
            3-Tomate
        """)
        if opcaoVegetables == '1':
            self.burguer.vegetables = "Azeitona"
        elif opcaoVegetables == '2':
            self.burguer.vegetables = "Alface"
        elif opcaoVegetables == '3':
            self.burguer.vegetables = "Tomate"
        else: 
            print("Opção Invalida")
    
    def build_sauce(self):
        opcaoSauce = input("""Escolha opção de Carne
            1-Barbecue
            2-Chipotle
            3-Supreme
        """)
        if opcaoSauce == '1':
            self.burguer.sauce = "Barbecue"
        elif opcaoSauce == '2':
            self.burguer.sauce = "Chipotle"
        elif opcaoSauce == '3':
            self.burguer.sauce = "Supreme"
        else: 
            print("Opção Invalida")
        
    def get_burguer(self):
        return self.burguer
        
        
class Director:
    def __init__(self, builder):
        self.builder = builder
        
    def construct_burguer(self):
        self.builder.build_bread()
        self.builder.build_meat()
        self.builder.build_cheese()
        self.builder.build_vegetables()
        self.builder.build_sauce()
        
builder =  BurguerBuilder()
director = Director(builder)
director.construct_burguer()
burguer = builder.get_burguer()
print(burguer)
    