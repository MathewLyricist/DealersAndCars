import styles from './DealersTable.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DealersTable({ dealers, onDealerClick }) {
	const [editMode, setEditMode] = useState(null);
	const [isAddFormVisible, setIsAddFormVisible] = useState(false);
	const router = useRouter();

	const [formData, setFormData] = useState({
		Name: '',
		City: '',
		Address: '',
		Area: '',
		Rating: '',
	});
	const [newDealerData, setNewDealerData] = useState({
		Name: '',
		City: '',
		Address: '',
		Area: '',
		Rating: '',
	});

	const handleInputChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleNewDealerChange = e => {
		setNewDealerData({
			...newDealerData,
			[e.target.name]: e.target.value,
		});
	};

	const handleEdit = dealer => {
		setEditMode(dealer.id);
		setFormData(dealer);
	};

	const sendRabbitMQMessageDealer = async message => {
		console.log('Send rabbitmq Dealer');
		try {
			console.log(message);
			await fetch('http://localhost:3000/api/rabbitmq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Entity': 'DEALER'
				},
				body: JSON.stringify(message),
			});
		} catch (error) {
			console.error('Ошибка отправки сообщения в RabbitMQ:', error);
		}
		window.location.reload();
	};

	const handleSave = async id => {
		/*await fetch(`http://localhost:8080/dealers/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});*/

		sendRabbitMQMessageDealer({
			action: 'update',
			entity: 'DEALER',
			id,
			data: formData,
		});

		setEditMode(null);
		window.location.reload();
	};

	const handleDelete = async id => {
		console.log('Handle delete in Dealer');
		try{
			/*const response = await fetch(`http://localhost:8080/dealers/${id}`, {
			method: 'DELETE',
			});
		
			if (response.ok || response.statusText === "") {
				console.log('Дилер успешно удален. Либо ошибка неизвестна')
			}else{
				console.error('Ошибка удаления дилера:', response.statusText);
				return; 
			}*/
		
			sendRabbitMQMessageDealer({
			action: 'delete',
			entity: 'DEALER',
			id,
			});
		}catch(error){
			console.error('Ошибка при удалении дилера:', error);
		}	
	};

	const handleAddDealer = async () => {
		try {
		  /*const response = await fetch('http://localhost:8080/dealers', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(newDealerData),
		  });

		  if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Ошибка: ${response.status} - ${errorText}`);
		  }
   
		  
		  const { message } = await response.json();
		  console.log(message); */
   
		  sendRabbitMQMessageDealer({
			action: 'add',
			entity: 'DEALER',
			data: newDealerData,
		  });
   
		  setNewDealerData({
			Name: '',
			City: '',
			Address: '',
			Area: '',
			Rating: '',
		  });
   
		  setIsAddFormVisible(false);
		} catch (error) {
		  console.error('Ошибка при добавлении дилера:', error);
		}
		//window.location.reload(); 
	};


	return (
		<>
			<h1 className={styles.tableName}>Дилеры</h1>
			<button
				className={styles.toggleFormButton}
				onClick={() => setIsAddFormVisible(!isAddFormVisible)}
			>
				{isAddFormVisible ? 'Скрыть форму' : 'Добавить дилера'}
			</button>
			{isAddFormVisible && (
				<div className={styles.addDealerForm}>
					<h2>Добавить нового дилера</h2>
					<form>
						<input
							name='Name'
							placeholder='Название'
							value={newDealerData.Name}
							onChange={handleNewDealerChange}
						/>
						<input
							name='City'
							placeholder='Город'
							value={newDealerData.City}
							onChange={handleNewDealerChange}
						/>
						<input
							name='Address'
							placeholder='Адрес'
							value={newDealerData.Address}
							onChange={handleNewDealerChange}
						/>
						<input
							name='Area'
							placeholder='Округ'
							value={newDealerData.Area}
							onChange={handleNewDealerChange}
						/>
						<input
							name='Rating'
							type='number'
							placeholder='Рейтинг'
							value={newDealerData.Rating}
							onChange={handleNewDealerChange}
						/>
						<button type='button' onClick={handleAddDealer}>
							Добавить
						</button>
					</form>
				</div>
			)}
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>ID дилера</th>
							<th>Название</th>
							<th>Город</th>
							<th>Адрес</th>
							<th>Округ</th>
							<th>Рейтинг</th>
							<th>Действия</th>
						</tr>
					</thead>
					<tbody>
						{dealers
							.slice()
							.sort((a, b) => a.id - b.id)
							.map(dealer => (
								<tr key={dealer.id}>
									{editMode === dealer.id ? (
										<>
											<td>{dealer.id}</td>
											<td>
												<input
													name='Name'
													value={formData.Name}
													onChange={handleInputChange}
												/>
											</td>
											<td>
												<input
													name='City'
													value={formData.City}
													onChange={handleInputChange}
												/>
											</td>
											<td>
												<input
													name='Address'
													value={formData.Address}
													onChange={handleInputChange}
												/>
											</td>
											<td>
												<input
													name='Area'
													value={formData.Area}
													onChange={handleInputChange}
												/>
											</td>
											<td>
												<input
													name='Rating'
													type='number'
													value={formData.Rating}
													onChange={handleInputChange}
												/>
											</td>
											<td>
												<button onClick={() => handleSave(dealer.id)}>
													Сохранить
												</button>
											</td>
										</>
									) : (
										<>
											<td>{dealer.id}</td>
											<td>{dealer.Name}</td>
											<td>{dealer.City}</td>
											<td>{dealer.Address}</td>
											<td>{dealer.Area}</td>
											<td>{dealer.Rating}</td>
											<td>
												<button onClick={() => handleEdit(dealer)}>
													Редактировать
												</button>
												<button onClick={() => handleDelete(dealer.id)}>
													Удалить
												</button>
												<button onClick={() => onDealerClick(dealer.id)}>
													Показать машины
												</button>
											</td>
										</>
									)}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
}
