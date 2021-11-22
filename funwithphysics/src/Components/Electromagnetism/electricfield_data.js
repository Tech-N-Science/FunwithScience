const Topics =[
    {
        topic:"Point Charge",
        details:"The electric field (E) produced at a point(P) due to a point charge(Q) held at a distance (r) from the point(P) is kQ/r².",
        formula:"E=kQ/r²",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L I⁻¹ T⁻³].",
        process:"To find the electric field for a point due to a point charge we need to know the charge of magnitude (Q), distance (r) between the point and point charge. ",
    },
    {
        topic:"Line Charge",
        formula:"E=kq/x*√(x²+a²)",
        siunit:"newtons per coulomb (N/C)",
        details:"Electric field produced (E) by a line charge (q) of finite length at a distance (x) from the center is given by the equation E=kq/x*√(x²+a²) [where (a) is half length of line charge]",
        dimension:"[M L I⁻¹ T⁻³]",
        process:"To find the electric field (E) by a line charge of finite length we need to know the charge (q), distance(x) and the half length (a)."
    },
    {
        topic:"Sphere",
        formula:"E=kqr/R³",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L I⁻¹ T⁻³]",
        details:["There are three condition for Sphere:",<br/>,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",<br/>,
        "2) If r = R, in in this case electric field produced is same as that of a point charge i.e, E = kq/r²",<br/>,
        "3) If r < R, in in this case electric field produced is kqr/R³",<br/>,
        
        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. "],
        process:"To find the Electric field (E) for the sphere, we need to know the charge (q) by the sphere, radius (R) of the sphere and the distance (r) where as k is the constant"
    },
    {
        topic:"Ring",
        formula:"E=kQx/(x²+R²)⁽³/²⁾",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L I⁻¹ T⁻³]",
        details:"The electric field produced at a point P due to a ring charge is E=kQx/(x²+R²)⁽³/²⁾, Where Q=total charge, R is the Radius of the ring, x is the distance from the center of the ring and P where as k is constant. In case total charge is not known then Q=2πλR (where λ is charge density and R is radius of ring).",
        process:"By putting the value of radius (R), charge (Q) and the distance (x), we can easily find the electric fied produced by the charged ring."
    },
    {
        topic:"Disc",
        formula:"E=σ/2ε₀[1-x/√(x²+R²)]",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L I⁻¹ T⁻³].",
        details:`Electric field produced by the charged disc at a point P is given by the equation "E=σ/2ε₀[1-x²/√(x²+R²)]" where σ is surface density, x is distance, R is the radius where as ε₀ is constant and it's value is 8.854187817 × 10⁻¹² C²/N. m² `,
        process:"To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface density(σ), where as the (ε₀) is constant and its value is 8.854187817 × 10⁻¹² C²/N. m² ",
    },
    {
        topic:"Shell",
        details:["There are three condition for Shell:",<br/>,
        "1) If r > R, in this case electric field produced is same as that of a point charge i.e, E = kq/r²",<br/>,
        "2) If r = R, in in this case electric field produced is same as that of a point charge i.e, E = kq/r²",<br/>,
        "3) If r < R, in in this case electric field produced is zero",<br/>,
        
        "where 'r' is the distance between the center of sphere and the point at which electric field is produced and 'R' is the radius of sphere. "],
        formula:"E=kQ/r²",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L I⁻¹ T⁻³].",
        process:"To find the electric field produced by a spherical shell we need to know the charge of magnitude (Q), distance (r) away from the spherical shell and by putting these values in formula we can easily find the electric field.",
    }
]
export default Topics 
