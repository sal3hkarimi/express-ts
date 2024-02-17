import express, { Request, Response } from "express";


export default (app:any) => {
    
    app.get("/", (rq: Request, rs: Response) => {
        rs.send("Welcome to express app...");
    });
    
    app.get("/login", (rq: Request, rs: Response) => {
        rs.json({
            success: true,
        });
    });

};
