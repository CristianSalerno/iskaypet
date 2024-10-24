import  { useState } from 'react';

const PersonalDataFormPage = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Lógica para guardar los datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PersonalDataFormPage;
