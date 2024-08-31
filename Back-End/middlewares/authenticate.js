import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.header("authorization");
    if (!token) {
        console.log('No token provided');
        return res.status(401).send("Access denied. No token provided.");
    }

    const bearerToken = token.split(" ")[1];
    
    try {
        const decoded = jwt.verify(bearerToken, "johncena");
        req.user = decoded.user; 
        next();
    } catch (ex) {
        console.error('Invalid token:', ex.message);
        res.status(400).send("Invalid token.");
    }
};
