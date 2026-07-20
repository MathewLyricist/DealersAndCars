import amqplib from 'amqplib';

export async function POST(req) {
	console.log('Отправка в очередь.');
	try {
		const message = await req.json();
		const connection = await amqplib.connect('amqp://172.17.0.2:5672/vhost');
		const channel = await connection.createChannel();
		const queueCar = 'spring-boot-car-shop';
		const queueDealer = 'spring-boot-dealer-shop';
		
		//console.log(req.headers);
		console.log(req.headers.get('entity'));
		const entity = req.headers.get('entity');
		if(entity == 'DEALER'){
			console.log('Пытаемся отправить дилера на операцию. Бедный дилер.');
			await channel.assertQueue(queueDealer);
			channel.sendToQueue(queueDealer, Buffer.from(JSON.stringify(message)));
		}else{
			console.log('Пытаемся отправить автомобиль на разбор. Марк был хороший.');
			await channel.assertQueue(queueCar);
			channel.sendToQueue(queueCar, Buffer.from(JSON.stringify(message)));
		}
		
		await channel.close();
		await connection.close();

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('RabbitMQ Error:', error);
		return new Response(JSON.stringify({ error: 'Failed to send message' }), {
			status: 500,
		});
	}
}
