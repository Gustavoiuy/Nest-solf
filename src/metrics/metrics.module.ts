// metrics.module.ts
import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { PrometheusService } from './prometheus.service'; // Importa PrometheusService

@Module({
    imports: [/* ... otros módulos ... */],
    controllers: [MetricsController],
    providers: [PrometheusService], // Registra PrometheusService como un proveedor
  })
export class MetricsModule {}
