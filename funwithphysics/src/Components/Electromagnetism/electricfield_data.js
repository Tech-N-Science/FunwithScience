const Topics =[
    {
        topic:"Point Charge",
        details:"The electric field (E) produced by a point charge with a charge (Q) at a point a distance (r) away from a point charge is defined by a equation E=kQ/r², where k is a constant and its value is 8.99*10^9 Nm²/C²",
        formula:"E=kQ/r²",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L/ I T³].",
        process:"To find the electric field for a point charge we need to know the charge of magnitude (Q), at a point a distance (r) away from the point charge, by putting these values in formula we can easily find the electric field",
    },
    {
        topic:"Line Charge",
        formula:"E=kq/x*√(x²+a²)",
        siunit:"newtons per coulomb (N/C)",
        details:"Electric field produced (E) by a line charge (q) of finite length at a distance (x) from the center and (a) is the half length is given by the equation E=kq/x*√(x²+a²)",
        dimension:"[M L/ I T³]",
        process:"To find the electric field (E) by a line charge of finite length we need to know the charge (q), distance(x) and the half length (a), by putting these values we can easily find the Electric field"
    },
    {
        topic:"Sphere",
        formula:"E=kqr/R³",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L/ I T³]",
        details:`"E=kqr/R³" , Where E is Electric field, q is charge, R is radius and r is distance.`,
        process:"To find the Electric field (E) for the sphere, we need to know the charge (q) by the sphere, radius (R) of the sphere and the distance (r) where as k is the constant"
    },
    {
        topic:"Ring",
        formula:"E=kQx/(x²+R²)^(3/2)",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L/ I T³]",
        details:"E=kQx/(x²+R²)^(3/2), Where Q=2πλR, R is the Radius of the ring, λ is the charge density and the x is the distance from the center of the ring the axis where as the k is constant.",
        process:"By putting the value of radius (R), charge density (λ) and the distance (x), we can easily find the electric fied for the charged ring."
    },
    {
        topic:"Disc",
        formula:"E=σ/2*ε0[1-x²/√(x²+R²)]",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L/ I T³].",
        details:`Electric field for the charged disc is given by the equation "E=σ/2*ε0[1-x²/√(x²+R²)]" where σ is surface density x is distance, R is the radius where as ε0 is constant and it's value is 8.854187817 × 10⁻¹² F/m `,
        process:"To find the electric field for the disc we need to know the Radius (R) of the disc, and the distance (x) and the surface density(σ), where as the (ε0) is constant and its value is 8.854187817 × 10⁻¹² F/m ",
    },
    {
        topic:"Shell",
        details:"The electric field (E) produced by a spherical shell with a charge (Q) at a point a distance (r) away from a point charge is defined by a equation E=kQ/r², where k is a constant and its value is 8.99*10^9 Nm²/C²",
        formula:"E=kQ/r²",
        siunit:"newtons per coulomb (N/C)",
        dimension:"[M L/ I T³].",
        process:"To find the electric field for a spherical shell we need to know the charge of magnitude (Q), a distance (r) away from the spherical shell, by putting these values in formula we can easily find the electric field",
    }
]
export default Topics