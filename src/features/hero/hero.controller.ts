import { Request, Response } from "express";
import { HeroService } from "./hero.service";

const createHero = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await HeroService.createHeroDB(payload);

    res.json({
      status: true,
      message: 'Home Hero Blog created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getAllHero = async (req: Request, res: Response) => {
  try {
    const result = await HeroService.getALlHeroDB();

    res.json({
      status: true,
      message: 'Home Hero Article are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleHero = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await HeroService.getSingleHeroDB(id);

    res.json({
      status: true,
      message: 'Single Hero is retrieve successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const updateHero = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const result = await HeroService.updateHeroDB(id, payload);

    res.json({
      status: true,
      message: 'Home Hero is update successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const deleteHero = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await HeroService.deleteHeroDB(id);

    res.json({
      status: true,
      message: 'Home Hero is delete successfully',
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const heroController = {
  createHero,
  getAllHero,
  getSingleHero,
  updateHero,
  deleteHero,
};