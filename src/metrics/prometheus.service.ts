// prometheus.service.ts
import { Injectable } from '@nestjs/common';
import { Counter, Histogram, register } from 'prom-client';

@Injectable()
export class PrometheusService {
  constructor() {}

  // Define tus métricas aquí
  requestCounter = new Counter({
    name: 'api_requests_total',
    help: 'Total number of API requests',
    labelNames: ['method', 'route', 'status'],
  });

  register = register;

  latencyHistogram = new Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['route'],
    buckets: [0.1, 0.5, 1, 2, 5], // Bins para el histograma
  });

  // Función para registrar la latencia de una solicitud
  recordLatency(route: string, startTime: number) {
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000; // Convertir a segundos
    this.latencyHistogram.labels({ route }).observe(duration);
  }
}
