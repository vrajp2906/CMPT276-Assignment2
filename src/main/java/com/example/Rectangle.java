package com.example;


public class Rectangle {
    private int id;
    private String name;
    private int width;
    private int height;
    private String color;
   

    public void setId(Integer n){
        this.id = n;
    }

    public int getId(){
        return this.id;
    }

    public void setName(String n){
        this.name = n;
    }
  
    public String getName(){
        return this.name;
    }


    public void setWidth(int w){
        this.width = w;
    }

    public int getWidth(){
        return this.width;
    }

    public void setHeight(int h){
        this.height = h;
    }

    public int getHeight(){
        return this.height;
    }

    public void setColor(String c){
        this.color = c;
    } 

    public String getColor(){
        return this.color;
    }
    
}
