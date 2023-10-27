// metrics.controller.ts
import { Controller, Get, Req, Res } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { Request } from 'express';

@Controller('metrics')
export class MetricsController {
  constructor(private prometheusService: PrometheusService) {}

  @Get()
  async getMetrics(@Res() res) {
    res.set('Content-Type', this.prometheusService.register.contentType);
    res.send(await this.prometheusService.register.metrics());
  }

  @Get('ejemplo')
  async ejemplo(@Req() req: Request) {
    const startTime = Date.now(); // Registrar el tiempo de inicio
    // Tu lógica de controlador aquí

    this.prometheusService.recordLatency('/api/ejemplo', startTime); // Registrar latencia
    return 'Respuesta de ejemplo';
  }
}
