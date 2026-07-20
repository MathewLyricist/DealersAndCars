'use client';
import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function DealerPage({ params }) {
	const router = useRouter();
	const { id } = use(params);
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showAddCarForm, setShowAddCarForm] = useState(false);
	const [showUpdatedCarForm, setShowUpdatedCarForm] = useState(false);
	const [editCarId, setEditCarId] = useState(null);
	const [carFormData, setCarFormData] = useState({
		Firm: '',
		Model: '',
		Year: '',
		Power: '',
		Color: '',
		Price: '',
		dealerid: id,
	});

	const handleNewCarChange = e => {
		setCarFormData({
			...carFormData,
			[e.target.name]: e.target.value,
		});
	};

	const sendRabbitMQMessage = async message => {
		try {
			console.log(message);
			await fetch('http://localhost:3000/api/rabbitmq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Entity': 'CAR'
				},
				body: JSON.stringify(message),
			});
			window.location.reload();
		} catch (error) {
			console.error('Ошибка отправки сообщения в RabbitMQ:', error);
		}
	};

	useEffect(() => {
		const fetchCars = async () => {
			try {
				const response = await fetch(`http://localhost:8080/cars/${id}`);
 
				if (!response.ok) {
					throw new Error('Ошибка ответа сервера');
				}
				const data = await response.json();
				setCars(data); 
			} catch (error) {
				console.error('Ошибка запроса:', error);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
 
		fetchCars();
	}, [id]); 
	
	const handleAddCar = async () => {
		//e.preventDefault();

			try {
				/*const response = await fetch(`http://localhost:8080/cars/${id}`, {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(carFormData),
				});
	  
				if (!response.ok) {
				  const errorText = await response.text();
				  throw new Error(`Ошибка: ${response.status} - ${errorText}`);
				}
				
				//console.log(message); 
			//const {addedCar} = await response.json();

			await fetch('http://localhost:3000/api/rabbitmq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ action: 'add', car: addedCar }),
			});*/
			
			sendRabbitMQMessage({
				action: 'add',
				entity: 'CAR',
				data: carFormData,
			});

			//setCars(prevCars => [...prevCars, addedCar]);
			setShowAddCarForm(false);
			setCarFormData({
				Firm: '',
				Model: '',
				Year: '',
				Power: '',
				Color: '',
				Price: '',
				dealerid: id,
			});
			//window.location.reload();
		} catch (error) {
			console.error('Ошибка добавления:', error);
			setError(error.message);
		}
	};
	
	const handleUpdateCar = async (carId) => {
		try {
		
			console.log("Данные для обновления:", carFormData);
			console.log('dealerId:', id);
			console.log('carId:', carId);
			//const dealerId = id;
			//const url = `http://localhost:8080/cars/${dealerId}/${carId}`;
			//console.log('URL для запроса:', url);
	  
			/*const response = await fetch(url, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(carFormData),
			});
	  
			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(`Ошибка обновления автомобиля: ${response.status} - ${errorText}`);
			}
			
			await fetch('http://localhost:3000/api/rabbitmq', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({ action: 'update', car: updatedCar }),
			});*/

			//const updatedCar = await response.json();
			//console.log("Обновленный автомобиль:", updatedCar);
			sendRabbitMQMessage({
				action: 'update',
				entity: 'CAR',
				id: carId,
				data: carFormData,
			});

			//setCars(prevCars => prevCars.map(car => (car.id === carId ? updatedCar : car)));			
			setShowUpdatedCarForm(false);
			setCarFormData({
				Firm: '',
				Model: '',
				Year: '',
				Power: '',
				Color: '',
				Price: '',
				dealerid: id,
			});
			//window.location.reload();
	  
		} catch (error) {
			console.error('Ошибка обновления:', error);
			setError(error.message);
		}
	};
 
	
	const handleDeleteCar = async (carId) => {
		try {
			//const dealerId = id;
			//console.log('dealerId:', dealerId);
			console.log('carId:', carId); 
			//const id = carId;
			/*const response = await fetch(`http://localhost:8080/cars/${dealerId}/${carId}`, {
				method: 'DELETE',
			});
	
			if (!response.ok) {
				throw new Error('Ошибка удаления машины');
			}
			
			await fetch('http://localhost:3000/api/rabbitmq', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({ action: 'delete', carId }),
			});*/

			sendRabbitMQMessage({
				action: 'delete',
				entity: 'CAR',
				id: carId,
				data: carFormData,
			});

			setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
		} catch (error) {
			console.error('Ошибка:', error);
			setError(error.message);
		}
	};

	const handleEditClick = car => {
		setShowUpdatedCarForm(true);
		setEditCarId(car.carid);
		setCarFormData({
			carid: car.carid,
			Firm: car.Firm,
			Model: car.Model,
			Year: car.Year,
			Power: car.Power,
			Color: car.Color,
			Price: car.Price,
			dealerid: id,
		});
	};

	const handleCancelEdit = () => {
		setShowUpdatedCarForm(false); // Скрыть форму
		setEditCarId(null); // Очистить ID редактируемого автомобиля
		setCarFormData({ // Очистить данные формы
			Firm: '',
			Model: '',
			Year: '',
			Power: '',
			Color: '',
			Price: '',
			dealerid: '',
		});
	};

	return (
		<div className={styles.container}>
		  <h1>Дилер ID: {id}</h1>
		  <button className={styles.addButton} onClick={() => router.push('/')}>
			Назад
		  </button>
		  <button
			onClick={() => {
			  setShowAddCarForm(!showAddCarForm);
			  setEditCarId(null);
			  setCarFormData({
				Firm: '',
				Model: '',
				Year: '',
				Power: '',
				Color: '',
				Price: '',
				dealerid: id,
			  });
			}}
			className={styles.addButton}
		  >
			{showAddCarForm ? 'Скрыть форму' : 'Добавить машину'}
		  </button>
	  
		  {(showAddCarForm) && (
			<div className={styles.addCarForm}>
			  <form>
				<input
				  type='text'
				  name='Firm'
				  placeholder='Фирма'
				  value={carFormData.Firm}
				  onChange={handleNewCarChange}
				  required
				/>
				<input
				  type='text'
				  name='Model'
				  placeholder='Модель'
				  value={carFormData.Model}
				  onChange={handleNewCarChange}
				  required
				/>
				<input
				  type='number'
				  name='Year'
				  placeholder='Год'
				  value={carFormData.Year}
				  onChange={handleNewCarChange}
				  required
				/>
				<input
				  type='number'
				  name='Power'
				  placeholder='Мощность'
				  value={carFormData.Power}
				  onChange={handleNewCarChange}
				  required
				/>
				<input
				  type='text'
				  name='Color'
				  placeholder='Цвет'
				  value={carFormData.Color}
				  onChange={handleNewCarChange}
				  required
				/>
				<input
				  type='number'
				  name='Price'
				  placeholder='Цена'
				  value={carFormData.Price}
				  onChange={handleNewCarChange}
				  required
				/>
				<button type='button' onClick={handleAddCar}>
				  Добавить
				</button>
			  </form>
			</div>  
		  )}
	  
		  {loading && <p>Загрузка...</p>}
		  {error && <p>Ошибка: {error}</p>}
		  
		  {showUpdatedCarForm && (
			<div className={styles.editCarForm}>
				<h2>Редактирование автомобиля</h2>
				<form>
					<input
						type='text'
						name='Firm'
						value={carFormData.Firm}
						onChange={handleNewCarChange}
					/>
					<input
						type='text'
						name='Model'
						value={carFormData.Model}
						onChange={handleNewCarChange}
					/>
					<input
						type='number'
						name='Year'
						value={carFormData.Year}
						onChange={handleNewCarChange}
					/>
					<input
						type='number'
						name='Power'
						value={carFormData.Power}
						onChange={handleNewCarChange}
					/>
					<input
						type='text'
						name='Color'
						value={carFormData.Color}
						onChange={handleNewCarChange}
					/>
					<input
						type='number'
						name='Price'
						value={carFormData.Price}
						onChange={handleNewCarChange}
					/>
					<button type='button' onClick={() => handleUpdateCar(editCarId)}>Сохранить изменения</button>
					<button type='button' onClick={handleCancelEdit}>Отменить редактирование</button>
				</form>
			</div>
		)}

					{cars.length > 0 ? (
					<table className={styles.table}>
						<thead>
						<tr>
							<th>№</th>
							<th>Фирма</th>
							<th>Модель</th>
							<th>Год</th>
							<th>Мощность</th>
							<th>Цвет</th>
							<th>Цена</th>
							<th>Действия</th>
						</tr>
						</thead>
						<tbody>
						{cars.map((car, index) => (
							<tr key={index}>
							<td>{index + 1}</td>
							<td>{car.Firm}</td>
							<td>{car.Model}</td>
							<td>{car.Year}</td>
							<td>{car.Power}</td>
							<td>{car.Color}</td>
							<td>{car.Price}</td>
							<td>
								<button
								onClick={() => handleEditClick(car)}
								className={styles.editButton}
								>
								Редактировать
								</button>
								<button
								onClick={() => handleDeleteCar(car.carid)
								}
								className={styles.deleteButton}
								>
								Удалить
								</button>
							</td>
							</tr>
						))}
						</tbody>
					</table>
					) : (
					<p>Нет машин для этого дилера.</p>
					)}
				</div>
				);
}	  