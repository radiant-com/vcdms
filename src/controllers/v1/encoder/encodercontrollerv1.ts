import { NextFunction, Response } from 'express';
import { BaseController } from '../../basecontroller';
import {encoderServicesV1} from '../../../services/v1/encoder/encoderservicesv1';
import {ReqEncoderschemas} from '../../../routes/v1/encoder/encoderschema';
import { IFilteredRequest } from "../../../interfaces";

class EncoderControllerV1 extends BaseController {

    /**
     * @description Get currently set properties of encoder.
     */
    
    public async GetEncoderPropertiesByPort(req: IFilteredRequest<ReqEncoderschemas>, res: Response, next: NextFunction) {
        try {
            const requestResult = await encoderServicesV1.GetEncoderPropertiesByPort(req.body);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    /**
     * @description Get current status of encoder.
     */
    public async GetEncoderStatusByPort(req: IFilteredRequest<ReqEncoderschemas>, res: Response, next: NextFunction) {
        try {
            const requestResult = await encoderServicesV1.GetEncoderStatusByPort(req.body);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    /**
     * @description Request to start encoding.
     */
    public async StartEncodingByPort(req: IFilteredRequest<ReqEncoderschemas>, res: Response, next: NextFunction) {
        try {
            const requestResult = await encoderServicesV1.StartEncodingByPort(req.body);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }

    /**
     * @description Request to stop encoding.
     */
    public async StopEncodingByPort(req: IFilteredRequest<ReqEncoderschemas>, res: Response, next: NextFunction) {
        try {
            const requestResult = await encoderServicesV1.StopEncodingByPort(req.body);
            return res.send(requestResult);
        } catch (error) {
            return null;
        }
    }
}

export const encoderControllerV1 = new EncoderControllerV1();