import mongoose, { Schema, models } from 'mongoose';

const proyectosSchema = new Schema(
    {
        titulo: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        tecnologias: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

const Proyectos = models.Proyectos || mongoose.model('Proyectos', proyectosSchema);
export default Proyectos;