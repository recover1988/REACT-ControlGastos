import React from "react";

const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className="filtros sombra contenedor">
            <form action="">
                <div className="campo">
                    <label htmlFor="">Filtrar Gastos</label>
                    <select
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">comida</option>
                        <option value="casa">casa</option>
                        <option value="gastos">gastos</option>
                        <option value="ocio">ocio</option>
                        <option value="salud">salud</option>
                        <option value="suscripciones">suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Filtros;
