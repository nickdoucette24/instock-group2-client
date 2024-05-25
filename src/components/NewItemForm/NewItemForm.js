import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import CancelButton from "../CancelButton/CancelButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import './NewItemForm.scss';

const NewItemForm = ({ submitButton }) => {
    const [errors, setErrors] = useState({});
    const [selected, setSelected] = useState('');
    const [formValues, setFormValues] = useState({
        item_name: "",
        description: "",
        category: "",
        status: "",
        quantity: "",
        warehouse_name: "",
    });

    let navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        if (location.pathname.includes("/edit")) {
            axios.get(`http://localhost:8080/api/warehouses/${id}}`).then((response) => {
                const {
                    address, 
                    city, 
                    contact_email, 
                    contact_name, 
                    contact_phone, 
                    contact_position, 
                    country, 
                    warehouse_name
                } = response.data;

                const warehouseData = {
                    address, 
                    city, 
                    contact_email, 
                    contact_name, 
                    contact_phone, 
                    contact_position, 
                    country, 
                    warehouse_name
                };
                setFormValues(warehouseData);
            })
        }
        // eslint-disable-next-line 
    }, [])

    const handleChangeState = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        
        // Update the formValues with the selected status
        setFormValues({
            ...formValues,
            status: value,
        });
    
        // Deselect the other radio button
        if (name === 'in-stock' && value === 'In stock') {
            setFormValues({
                ...formValues,
                status: "In stock"
            });
        } else if (name === 'out-of-stock' && value === 'Out of stock') {
            setFormValues({
                ...formValues,
                status: 'Out of stock'
            });
        }

        setSelected(name);
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();

        let formErrors = {};
        if (!formValues.item_name) formErrors.warehouse_name = true;
        if (!formValues.description) formErrors.description = true;
        if (!formValues.category) formErrors.category = true;
        if (!formValues.status) formErrors.status = true;
        if (!formValues.quantity) formErrors.quantity = true;
        if (!formValues.warehouse_name) formErrors.warehouse_name = true;
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0 && location.pathname.includes("/add")) {
        // No errors, form is valid
            axios.post("http://localhost:8080/api/warehouses", formValues).then((response) => console.log(response.data)).catch((err) => console.log(err));
            navigate("/");
        }

        if (Object.keys(formErrors).length === 0 && location.pathname.includes("/edit")) {
        // No errors, form is valid
            axios.put(`http://localhost:8080/api/warehouses/${id}`, formValues).then((response) => console.log(response.data)).catch((err) => console.log(err));
            navigate("/");
        }
    }

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <section className="form-fields">
                <section className="form-section form-section--warehouse">
                    <h2 className="form-section__header">Item Details</h2>
                    <div className="form-section__input-wrapper">
                        <div className="warehouse-details__name">
                            <label className="form-label">
                                Item Name
                                <input 
                                    className={errors.item_name ? "form-input--error" : "form-input"}
                                    type="text" 
                                    name="item_name" 
                                    placeholder="Item Name"
                                    onChange={handleChangeState}
                                    value={formValues.item_name}
                                />
                                {errors.item_name && <ErrorMessage />}
                            </label>
                        </div>
                        <div className="warehouse-details__street">
                            <label className="form-label">
                                Description
                                <textarea 
                                    className={errors.description ? "form-textArea--error" : "form-textArea"}
                                    type="text" 
                                    name="description" 
                                    placeholder="Please enter a brief item description..." 
                                    onChange={handleChangeState}
                                    value={formValues.description}
                                />
                                {errors.description && <ErrorMessage />}
                            </label>
                        </div>
                        <div className="warehouse-details__city">
                            <label className="form-label" htmlFor="category-select">
                                Category
                                <select 
                                    className={errors.category ? "form-select--error" : "form-select"}
                                    type="text" 
                                    id="category-select"
                                    name="category" 
                                    placeholder="Please select" 
                                    onChange={handleChangeState}
                                    value={formValues.category}
                                >
                                    <option value="" className="placeholder" disabled selected>Please select</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Health">Health</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.category && <ErrorMessage />}
                            </label>
                        </div>
                    </div>
                </section>
                <hr className="section-border" />
                <section className="form-section">
                    <h2 className="form-section__header">Item Availability</h2>
                    <div className="form-section__input-wrapper">
                        <div className="contact-details__name">
                            <label className="form-label">
                                Status
                                <div className="radio-selectors">
                                    <div className="radio-selectors__item">
                                        <input 
                                            className="radio"
                                            id="instock"
                                            type="radio" 
                                            name="in-stock" 
                                            onChange={handleRadioChange}
                                            checked={formValues.status === 'In stock'} // Check if this radio is selected
                                            value="In stock"
                                        />
                                        <label htmlFor="instock" className={`p2 radio-text ${selected === 'in-stock' ? 'selected' : ''}`}>In stock</label>
                                    </div>
                                    <div className="radio-selectors__item">
                                        <input 
                                            className="radio"
                                            id="outofstock"
                                            type="radio" 
                                            name="out-of-stock" 
                                            onChange={handleRadioChange}
                                            checked={formValues.status === 'Out of stock'} // Check if this radio is selected
                                            value="Out of stock"
                                        />
                                        <label htmlFor="outofstock" className={`p2 radio-text ${selected === 'out-of-stock' ? 'selected' : ''}`}>Out of stock</label>
                                    </div>
                                </div>
                                {errors.status && <ErrorMessage />}
                            </label>
                        </div>
                        {formValues.status === 'In stock' && (
                            <div className="contact-details__position">
                                <label className="form-label">
                                    Quantity
                                    <input 
                                        className={errors.quantity ? "form-input--error" : "form-input"}
                                        type="text" 
                                        name="quantity" 
                                        placeholder="0" 
                                        onChange={handleChangeState}
                                        value={formValues.quantity}
                                    />
                                    {errors.quantity && <ErrorMessage />}
                                </label>
                            </div>
                        )}
                        <div className="contact-details__phone">
                            <label className="form-label">
                                Warehouse
                                <select 
                                    className={errors.warehouse_name ? "form-select--error" : "form-select"}
                                    type="text" 
                                    name="warehouse_name" 
                                    placeholder="Please select" 
                                    onChange={handleChangeState}
                                    value={formValues.warehouse_name}
                                >
                                    <option value="" className="placeholder" disabled>Please select</option>
                                    <option value="Boston">Boston</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Manhattan">Manhattan</option>
                                    <option value="Miami">Miami</option>
                                    <option value="Santa Monica">Santa Monica</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="SF">SF</option>
                                    <option value="Washington">Washington</option>
                                </select>
                                {errors.warehouse_name && <ErrorMessage />}
                            </label>
                        </div>
                    </div>
                </section>
            </section>
            <section className="buttons">
                <CancelButton />
                <button className="btn__add btn__add--form" type="submit">{submitButton}</button>
            </section>
        </form>
    );
};
    
export default NewItemForm;