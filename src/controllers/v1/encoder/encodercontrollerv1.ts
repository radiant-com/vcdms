import { NextFunction, Response } from 'express';
import { BaseController } from '../../basecontroller';
import { encoderServicesV1 } from '../../../services/v1/encoder/encoderservicesv1';
import { ReqEncoderschemas } from '../../../routes/v1/encoder/encoderschema';
import { IFilteredRequest } from "../../../interfaces";
import { ApiPath, SwaggerDefinitionConstant, ApiOperationPost } from "swagger-express-ts"
@ApiPath({
    path: "/api/v1",
    name: "Encoder API Calls",
    security: { apiKeyHeader: [] },
})
class EncoderControllerV1 extends BaseController {

    /**
     * @description Get currently set properties of encoder.
     */

    @ApiOperationPost({
        description: "Api to get currently set properties",
        path: '/getencoderpropertiesbyport',
        summary: "Api to get currently set properties",
        parameters: { body: { description: "Port Number", required: true } },
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            },
            404: {
                description: "Fail",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            }
        },
    })

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
     @ApiOperationPost({
        description: "Api to get status",
        path: '/getencoderstatusbyport',
        summary: "Api to get status",
        parameters: { body: { description: "Port Number", required: true } },
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            },
            404: {
                description: "Fail",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            }
        },
    })
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
    @ApiOperationPost({
        description: "Api to start encoding",
        path: '/startencodingbyport',
        summary: "Api to start encoding",
        parameters: { body: { description: "Port Number", required: true } },
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            },
            404: {
                description: "Fail",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            }
        },
    })
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

     @ApiOperationPost({
        description: "Api to stop encoding",
        path: '/stopencodingbyport',
        summary: "Api to stop encoding",
        parameters: { body: { description: "Port Number", required: true } },
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            },
            404: {
                description: "Fail",
                type: SwaggerDefinitionConstant.Response.Type.OBJECT,
            }
        },
    })
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